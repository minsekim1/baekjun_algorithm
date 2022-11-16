package java;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class InputBuffer {
	public static void main(String[] args) {
	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	String name;
	int age;
	Double weight;
	boolean isMan;
	try {
	name = br.readLine();
	age = Integer.parseInt(br.readLine());
	weight = Double.parseDouble(br.readLine());
	isMan = Boolean.parseBoolean(br.readLine());
	System.out.println("이름: " + name);
	System.out.println("나이: " + age + "세");
	System.out.println("몸무게: " + weight + "kg");
	System.out.println("남성인가요? " + isMan);
	} catch (IOException e) {
	e.printStackTrace();
	}

	}
}
