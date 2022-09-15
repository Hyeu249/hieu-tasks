# cli-golang

A small function performs the sqrt of an expression by using CLI in VSCode.

## Usage
**Prerequisites**
- [Golang](https://go.dev/dl/)
- [VS Code application](https://code.visualstudio.com/download)
- [VS Code Golang extension](https://code.visualstudio.com/docs/languages/go)

**1. The function perform sqrt of an expression**

```golang
func Calc(x float64,y float64)  (result float64){

	expression := math.Pow(x - y, 2) + math.Pow(x + y, 2)

	SqrtExpr := math.Sqrt(expression)

	//round two decimals places
	fmt.Print(math.Round(SqrtExpr*100) / 100)
    return math.Round(SqrtExpr*100) / 100
}
```

**2. CLI**

Call the function with two arguments in **CLI**

**Example:**

Inside `cli-golang` directory

```cli
go run main.go x y
```

**OR:**
```cli
go build main.go
```

```cli
./main x y
```

**Notes:**
- -m   ⇨ module mode
- x, y ⇨ input
- main.go ⇨ file name of project `\Desktop\project\task.j`

## Testing
**Incomplete**
