package plugin_test

import (
	"encoding/json"
	"fmt"
	plugin "github.com/B3nten/esbuild-plugin-http"
	"github.com/evanw/esbuild/pkg/api"
	"io"
	"os"
	"strings"
	"testing"
)

func TestBundle(t *testing.T) {
	importMap := plugin.ImportMap{}

	file, err := os.Open("importMap.json")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	bytes, err := io.ReadAll(file)
	if err != nil {
		panic(err)
	}
	decoder := json.NewDecoder(strings.NewReader(string(bytes)))
	err = decoder.Decode(&importMap)

	if err != nil {
		panic(err)
	}

	result := api.Build(api.BuildOptions{
		EntryPoints: []string{"test.ts"},
		Bundle:      true,
		Outfile:     "out.js",
		Plugins:     []api.Plugin{plugin.NewPluginWithImportMap(&importMap)},
		Write:       true,
		Format:      api.FormatESModule,
	})
	if len(result.Errors) > 0 {
		fmt.Println("Error:", result.Errors)
		os.Exit(1)
	}
}
