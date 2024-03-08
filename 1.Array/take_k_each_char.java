class take_k_each_char {
    public static int takeCharacters(String s, int k) {
        int i = 0;
        int j = s.length() - 1;
        int a = 0;
        int b = 0;
        int c = 0;
        while(i < j){
            if(s.charAt(i) == 'a'){
                a++;
                i++;
            }
            else if(s.charAt(j) == 'a'){
                a++;
                j--;
            }
            else if(s.charAt(i) == 'b'){
                b++;
                i++;
            }
            else if(s.charAt(j) == 'b'){
                b++;
                j--;
            }
            else if(s.charAt(i) == 'c'){
                c++;
                i++;
            }
            else if(s.charAt(j) == 'c'){
                c++;
                j--;
            }

            if(a >= k && b >= k && c >= k){
                return a + b + c;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int ans = takeCharacters(("aabbbcccaaa"), 2);
    }
}