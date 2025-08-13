package br.edu.infnet.at.ex05;

import java.util.Scanner;

public class ProgramaCgi {

    public static void main(String[] args) {
	   System.out.println("Content-Type: text/html");
       System.out.println(); 

       System.out.println("<html>");
       System.out.println("<head><title>Saudação CGI</title></head>");
       System.out.println("<body>");
       System.out.println("<h1>Olá, Terráqueos!</h1>");
       System.out.println("</body>");
       System.out.println("</html>");
    }
    
}
