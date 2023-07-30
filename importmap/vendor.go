package importmap

import (
	"fmt"
	"github.com/evanw/esbuild/pkg/api"
	"io"
	"net/http"
	"net/url"
	"os"
	"path"
	"strings"
)

var VendorPath = "_vendor"

func (m *ImportMap) Vendor() error {
	fmt.Println("urlToVendorPath()", urlToVendorPath("https://esm.sh/react"))
	fmt.Println("urlToVendorPath()", urlToVendorPath("https://esm.sh/react/react.js"))
	// create vendor directory
	err := os.MkdirAll(VendorPath, 0755)
	if err != nil {
		return err
	}
	for _, v := range m.Imports {
		vendorModule(v)
	}
	return nil
}

func vendorModule(path string) string {
	if isExternalPath(path) {

	} else if isLocalPath(path) {

	} else if isAbsolutePath(path) {

	}
	code, _ := fetchModule(path)
	imports := getImports(code)
	fmt.Println("imports:", imports)
	for _, v := range imports {
		vendorModule(v)
	}
	return ""
}

func fetchModule(p string) (string, error) {
	response, err := http.Get(p)
	if err != nil {
		return "", err
	}
	defer response.Body.Close()
	contents, err := io.ReadAll(response.Body)
	if err != nil {
		return "", err
	}
	//fmt.Println("contents:", string(contents), "ENDD_CONTENTS")
	return string(contents), nil
}

func isExternalPath(p string) bool {
	return strings.HasPrefix(p, "https://") || strings.HasPrefix(p, "http://")
}

func isLocalPath(p string) bool {
	return strings.HasPrefix(p, "./") || strings.HasPrefix(p, "../")
}

func isAbsolutePath(p string) bool {
	return path.IsAbs(p)
}

func urlToVendorPath(p string) string {
	url, err := url.Parse(p)
	if err != nil {
		return ""
	}
	if len(path.Ext(p)) == 0 {
		// return path + index.js
		return path.Join(VendorPath, url.Host, url.Path, "index.js")
	} else {
		// return the path
		return path.Join(VendorPath, url.Host, url.Path)
	}
}

func getImports(s string) []string {
	var imports []string
	pluginGetImports := api.Plugin{
		Name: "getImports",
		Setup: func(build api.PluginBuild) {
			build.OnResolve(api.OnResolveOptions{Filter: `.*`},
				func(args api.OnResolveArgs) (api.OnResolveResult, error) {
					fmt.Println("OnResolve:", args.Path)
					imports = append(imports, args.Path)
					return api.OnResolveResult{
						Path:     args.Path,
						External: true,
					}, nil
				},
			)
		},
	}
	result := api.Build(api.BuildOptions{
		Plugins: []api.Plugin{pluginGetImports},
		Stdin: &api.StdinOptions{
			Contents: s,
		},
		Bundle: true,
		Write:  false,
		Format: api.FormatESModule,
	})
	if len(result.Errors) > 0 {
		fmt.Println(result.Errors)
	}
	return imports
}
