package main

import (
	"testing"
)


func TestCalculate(t *testing.T){
	if Calc(2,3) != 5.1 {
		t.Error("Expected 2 + 2 to equal 4")
	}

}