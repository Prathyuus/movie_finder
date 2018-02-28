package com.movie;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;


/**
 * Servlet implementation class MovieServlet
 */
@WebServlet("/movie")
public class MovieServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	JSONObject info = new JSONObject();
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		/*String movie = request.getParameter("moviename");
		PrintWriter out=response.getWriter();
		out.println(movie);*/
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		
		JSONParser parser = new JSONParser();
		//JSONArray  addresses = new JSONArray();
		
			info.put("url1",request.getParameter("url1"));
		
	
	try {
		
		FileWriter jsonFileWriter = new FileWriter("//home//sapient//workspace//Moviehub//src//com//movie//dav.json");
		jsonFileWriter.write(info.toString());
		jsonFileWriter.flush();
		jsonFileWriter.close();
		
	} catch (Exception e) {
		e.printStackTrace();
	} finally {
		response.setContentType("application/json");
		response.getWriter().write(info.toString());
	}
	try
	{
		try {
			JSONObject obj = (JSONObject) parser.parse(new FileReader ("//home//sapient//workspace//Moviehub//src//com//movie//dav.json"));
		System.out.println(obj);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}finally {
		
	}
	
}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
