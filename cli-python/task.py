#access command line argument through the system module(sys)
import sys
#math is a module in python
import math


#calc function output square root of an expression
def calc(x,y):
    return math.sqrt((x-y)**2+ (x+y)**2)

#use ternary operator to resolve index list out of range(caused by pytest) 
i = len(sys.argv)

#convert string value of system module value to float
firstArgv = float(sys.argv[1]) if i == 3 else 0
secondArgv = float(sys.argv[2]) if i == 3 else 0

#call function with two arguments from the system module
value = calc(firstArgv,secondArgv)


#round to 2 decimal places
print(round(value, 2))



#CLI: python -m task 2 3
# -m means the module mode
