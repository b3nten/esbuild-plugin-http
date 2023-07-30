package main

import (
	"fmt"
	"github.com/B3nten/esbuild-plugin-importmap/importmap"
	"github.com/B3nten/esbuild-plugin-importmap/plugin"
	"github.com/evanw/esbuild/pkg/api"
	"os"
)

func main() {
	importMap, err := importmap.LoadImportMap()
	if err != nil {
		fmt.Println("Warning:", err)
	}

	result := api.Build(api.BuildOptions{
		EntryPoints: []string{"index.ts"},
		Bundle:      true,
		Outfile:     "out.js",
		Plugins:     []api.Plugin{plugin.NewPlugin(importMap)},
		Write:       true,
		Format:      api.FormatESModule,
	})
	if len(result.Errors) > 0 {
		fmt.Println("Error:", result.Errors)
		os.Exit(1)
	}
	importMap.Vendor()
}
