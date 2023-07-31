package plugin

import (
	"encoding/json"
	"errors"
)

type ImportMap struct {
	Imports map[string]string            `json:"imports"`
	Scopes  map[string]map[string]string `json:"scopes"`
}

func (importMap *ImportMap) Get(importPath string) (string, error) {
	if importMap.Imports == nil {
		return "", errors.New("no imports in import map")
	}
	if importMap.Imports[importPath] == "" {
		return "", errors.New("import not found in import map")
	}
	return importMap.Imports[importPath], nil
}

func (importMap *ImportMap) Has(importPath string) bool {
	if importMap.Imports == nil {
		return false
	}
	if importMap.Imports[importPath] == "" {
		return false
	}
	return true
}

func (importMap *ImportMap) Add(importPath string, importURL string) {
	if importMap.Imports == nil {
		importMap.Imports = make(map[string]string)
	}
	importMap.Imports[importPath] = importURL
}

func (importMap *ImportMap) Remove(importPath string) {
	if importMap.Imports == nil {
		return
	}
	delete(importMap.Imports, importPath)
}

func (importMap *ImportMap) String() string {
	bytes, _ := json.Marshal(importMap)
	return string(bytes)
}
