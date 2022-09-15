import task
import math
import random


x = random.random()*100
y = random.random()*100

def testCalc():
    # assert round(task.calc(2,3),2) == 5.1
    assert round(task.calc(x,y),2) == round(math.sqrt((x-y)**2+ (x+y)**2),2)

#CLI: pytest test.py