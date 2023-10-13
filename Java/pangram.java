public class pangram {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog"; 
        boolean isPangram = checkIfPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean checkIfPangram(String input) {
        input = input.toLowerCase(); 
        boolean[] alphabetOccurrence = new boolean[26]; 

        for (char c : input.toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                alphabetOccurrence[c - 'a'] = true;
            }
        }

       
        for (boolean occurred : alphabetOccurrence) {
            if (!occurred) {
                return false; 
            }
        }

        return true; 
    }
}

