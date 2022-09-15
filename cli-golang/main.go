// executable package
package main

//library of golang
import (
	"fmt"
	"math"
	"os"
	"strconv"
)

func main() {
		//convert string to float64 value
		var x, _ = strconv.ParseFloat(os.Args[1], 64)
		var y, _ = strconv.ParseFloat(os.Args[2], 64)

        Calc(x,y)

}

func Calc(x float64,y float64)  (result float64){

	expression := math.Pow(x-y, 2) + math.Pow(x+y, 2)

	SqrtExpr := math.Sqrt(expression)

	//round two decimals places
	fmt.Print(math.Round(SqrtExpr*100) / 100)
    return math.Round(SqrtExpr*100) / 100
}


//cli: go run main.go
