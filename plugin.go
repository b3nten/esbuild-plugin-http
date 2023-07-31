package plugin

import (
	"github.com/evanw/esbuild/pkg/api"
	"io"
	"net/http"
	"net/url"
	"strings"
)

func NewPluginWithImportMap(importMap *ImportMap) api.Plugin {
	return api.Plugin{
		Name: "importmap",
		Setup: func(build api.PluginBuild) {
			build.OnResolve(api.OnResolveOptions{Filter: `.*`},
				func(args api.OnResolveArgs) (api.OnResolveResult, error) {
					// first, do whatever you need to if the namespace is http-url
					if args.Namespace == "http-url" {
						base, err := url.Parse(args.Importer)
						if err != nil {
							return api.OnResolveResult{}, err
						}
						relative, err := url.Parse(args.Path)
						if err != nil {
							return api.OnResolveResult{}, err
						}
						return api.OnResolveResult{
							Path:      base.ResolveReference(relative).String(),
							Namespace: "http-url",
						}, nil
					}
					// if the namespace is not http-url, check if the path is in the import map
					if importMap.Has(args.Path) {
						imp, _ := importMap.Get(args.Path)
						return api.OnResolveResult{
							Path:      imp,
							Namespace: "http-url",
						}, nil
					}
					// if the path is not in the import map, check if it is a url
					if strings.HasPrefix(args.Path, "https://") {
						return api.OnResolveResult{
							Path:      args.Path,
							Namespace: "http-url",
						}, nil
					}
					result := build.Resolve(args.Path, api.ResolveOptions{})

					return api.OnResolveResult{
						Path: result.Path,
					}, nil
				})
			build.OnLoad(api.OnLoadOptions{Filter: ".*", Namespace: "http-url"},
				func(args api.OnLoadArgs) (api.OnLoadResult, error) {
					res, err := http.Get(args.Path)
					if err != nil {
						return api.OnLoadResult{}, err
					}
					defer res.Body.Close()
					bytes, err := io.ReadAll(res.Body)
					if err != nil {
						return api.OnLoadResult{}, err
					}
					contents := string(bytes)
					return api.OnLoadResult{Contents: &contents}, nil
				})
		},
	}
}

func NewPlugin() api.Plugin {
	return NewPluginWithImportMap(&ImportMap{})
}
