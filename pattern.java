
public class pattern{
    public static void main(String[] args) {
        int n = 5;
        char ch = 'A';
        // outer loop
        for(int i=1; i<=n; i ++ ){
                // inner loop 
                for(int chs = 1; chs <= i; chs++){
                    System.out.print(ch);
                    ch ++;
                }
                System.out.println();
        }
    }
}