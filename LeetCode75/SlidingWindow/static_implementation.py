

def fixed_sliding_window(arr, k):
    # sum up the first subarray and add it to tje result
    curr_subarray = sum(arr[:k])
    result = [curr_subarray]

    for i in range(1, len(arr) - k + 1):
        # substract (-) the prev element of the arr
        curr_subarray = curr_subarray - arr[i-1] 
        # Add (+) the new K element of the arr
        curr_subarray = curr_subarray + arr[i + k - 1]

        result.append(curr_subarray)

    return result


result = fixed_sliding_window([1, 2, 3, 4, 5], 3)

print(result)
