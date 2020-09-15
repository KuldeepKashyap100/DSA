function binary(n) {
    if(n<1)
        console.log(a);
    else {
        a[n-1] =0;
        binary(n-1);
        a[n-1] = 1;
        binary(n-1);
    }
}
a = [];

binary(2);