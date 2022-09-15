# cli-python
A small function performs the sqrt of an expression by using CLI in VSCode.

## Usage
**Prerequisites**
- [Python 3](https://www.python.org/downloads/)
- [VS Code application](https://code.visualstudio.com/download)
- [VS Code Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

**1. The function perform sqrt of an expression**

```python
def calc(x,y):
    return math.sqrt((x-y)**2+ (x+y)**2)
```
**2. CLI**

Call the function with two arguments in **CLI**

**Example:**
```cli
python -m task x y
```
**Notes:**
- -m   ⇨ module mode
- x, y ⇨ input
- task ⇨ file name of project `C:\Users\Desktop\project\task.j`

## Testing

**1.Install**

Install `pytest` library using VSCode

```cli
pip install pytest
```

**2. CLI**

Run test file using CLI in VSCode
```cli
pytest test.py
```
