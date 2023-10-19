# file name = 643.MaximumAverageSubarrayI.py

lst = [1,2,3,4,5,6,7,8] 
def sliding_window(elements, window_size):
    
    if len(elements) <= window_size:
       return elements
    for i in range(len(elements)):
        print(elements[i:i+window_size])

sliding_window(lst, 3)
