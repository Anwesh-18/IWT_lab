package pack1;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.*;
;
public class Connect {
	public static void main(String[] args) {
		try{
			String driver = "org.postgresql.Driver";
			String url = "jdbc:postgresql://192.168.1.17/cse_db24";
			String username = "24bcsh15";
			String password = "24bcsh15";
			Class.forName(driver);
			Connection conn = DriverManager.getConnection(url,username,password);
			System.out.println("Connection Successfull!");
			
//			//Creation of the table
//			Statement stmt = conn.createStatement();
//			String sql = "CREATE TABLE stcs(roll INT PRIMARY KEY,name VARCHAR(50),age INT,department VARCHAR(30),csgpa NUMERIC(3,2))";
//			stmt.executeQuery(sql);
			
//			//Input and Insertion
//			Scanner sc = new Scanner(System.in);
//			System.out.println("Enter Roll:");
//			int roll_no = sc.nextInt();
//			System.out.println("Enter Name:");
//			String name = sc.next();
//			System.out.println("Enter Age:");
//			int age = sc.nextInt();
//			System.out.println("Enter department:");
//			String department = sc.next();
//			System.out.println("Enter cgpa:");
//			double cgpa = sc.nextDouble();
//			Statement stmt = conn.createStatement();
//			String sql = "INSERT INTO stcs VALUES("+roll_no+",'"+name+"',"+age+",'"+department+"',"+cgpa+")";
//			stmt.executeUpdate(sql);
//			System.out.println("Row inserted Successsfully!!");
			
//			//fetching the data from the database
//			Statement stmt = conn.createStatement();
//			String sql = "SELECT * FROM stcs";
//			ResultSet res = stmt.executeQuery(sql);
//			while(res.next()) {
//				int roll = res.getInt("roll");
//				String name = res.getString("name");
//				int age = res.getInt("age");
//				String department = res.getString("branch");
//				double cgpa = res.getDouble("cgpa");
//				System.out.println("Roll:"+roll+"\nName:"+name+"\nAge:"+age+"\nDepartment:"+department+"\nCgpa:"+cgpa);
//				System.out.println();
//			}
//			System.out.println("All rows Has Been Fetched!!");
			
//			//Updating the cgpa of the student based on the input roll number
//			Scanner sc = new Scanner(System.in);
//			System.out.print("Enter the roll: ");
//			int roll = sc.nextInt();
//			System.out.print("Enter the new cgpa: ");
//			double new_cgpa = sc.nextDouble();
//			String sql = "UPDATE stcs SET cgpa="+new_cgpa+" WHERE roll="+roll;
//			Statement stmt = conn.createStatement();
//			stmt.executeQuery(sql);
			
//			//Deleting the record of the student based on the input roll number
//			Scanner sc = new Scanner(System.in);
//			System.out.print("Enter the roll: ");
//			int roll = sc.nextInt();
//			String sql = "DELETE FROM stcs WHERE roll="+roll;
//			Statement stmt = conn.createStatement();
//			stmt.executeQuery(sql);
		}catch(Exception e){
			System.out.println(e);
		}
	}
}
