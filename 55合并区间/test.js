/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  intervals.sort((a,b)=>a[0]-b[0])
  const merged = []
  for(const interval of intervals){
    const [left,right] = interval
    const last = merged[merged.length-1]
    if(last){
      const [lleft,lright]= last
      if((left <= lright && left >= lleft) || (right >= lleft && right<= lright)){
        merged[merged.length-1] = [Math.min(left,lleft),Math.max(right,lright)]
        continue
      }
    }
    merged.push([left,right])
  }
  return merged
};
/**
 * 先排序再合并
 */