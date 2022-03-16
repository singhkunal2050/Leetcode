class Solution {
    public void duplicateZeros(int[] arr) {
        int n = arr.length; 
        int count = 0; 
        for(int i = 0; i < n; i++){
            if(arr[i] == 0){
                count++; 
            }
        }
        int newLength = count + n; 
        int[] res = new int[newLength];
        
        int j = 0; 
        
        for(int i = 0; i < n; i++){
            res[j] = arr[i]; 
            j++; 
            if(arr[i] == 0){
                res[j] = 0; 
                j++; 
            }
        }
        for(int i = 0; i < n; i++){
            arr[i] = res[i]; 
        }
    }
}