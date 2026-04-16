function removeDuplicates(a:number[]):number[]{
    let uniqueSet:Set<number> = new Set();
    for(let i=0;i<a.length;i++){
        uniqueSet.add(a[i]);
    }
    return Array.from(uniqueSet);
}