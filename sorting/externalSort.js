/**

Let me give you an example. Take arrays A1 = {1, 2, 3, 4} A2 = {10, 12, 13, 14} A3 = {20, 34, 45}. 
Now let's say I perform 3 way merge, taking 2 elements per array at a time. 
The remaining RAM can contain max of 6 elements. 

Let's say, initial i/p contains first 2 elements from each of the array....RAM have free space for 6 elements
.
Initially,
i/p  = {1, 2, 10, 12, 20, 34}
O1={}

Apply 3-way merge,
step 1 : 
i/p = {1, 2, 10, 12, 20, 34}
O1 = {1}

step 2 : 
i/p = { 1, 2, 10, 12, 20, 34} 
O1 = {1, 2}
Now, all 2 elements of A1 are processed. So, we will load next 2 elements of A1 into RAM.
i/p becomes {3, 4, 10, 12, 20, 34}
.

step 3: 
i/p = {3, 4, 10, 12, 20, 34}
O1 = {1, 2, 3}

step 4: 
i/p = {3 , 4, 10, 12, 20, 34}
O1 = {1, 2, 3, 4}
Here, A1 is completely processed.

step 5: 
i/p = { -, -, 10, 12, 20, 34}
O1 = {1, 2, 3, 4, 10}

step 6: 
i/p = {- , - , 10, 12, 20, 34}
O1 = {1, 2, 3, 4, 10, 12}
Now, O1 contains 6 elements. Write O1 to file.
Next i/p will become {-, -, 13, 14, 20,34}  and O2={ }......continue this way.

 */