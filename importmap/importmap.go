package importmap

import (
	"encoding/json"
	"errors"
	"os"
)

type ImportMap struct {
	Imports map[string]string            `json:"imports"`
	Scopes  map[string]map[string]string `json:"scopes"`
}

func loadImportMapFromPath(path string) (*ImportMap, error) {
	importMap := &ImportMap{}
	file, err := os.Open(path)
	if err != nil {
		return importMap, err
	}
	defer file.Close()
	decoder := json.NewDecoder(file)
	err = decoder.Decode(importMap)
	if err != nil {
		return importMap, err
	}
	return importMap, nil
}

func LoadImportMap() (*ImportMap, error) {
	possiblePaths := []string{
		"import-map.json",
		"importMap.json",
		"importmap.json",
		"import_map.json",
	}
	importMap := &ImportMap{}
	for _, path := range possiblePaths {
		importMap, err := loadImportMapFromPath(path)
		if err != nil {
			continue
		} else {
			return importMap, err
		}
	}
	return importMap, errors.New("no import map found")
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
