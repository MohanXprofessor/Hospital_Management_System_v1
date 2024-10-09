package com.HMSApp.Hospital.Management.System.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.HMSApp.Hospital.Management.System.Services.PatientsService;
import com.HMSApp.Hospital.Management.System.entity.Patients;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/hospital/api")
public class PatientsController {
	
	@Autowired
	private PatientsService pservice;
	
	
	@PostMapping("/createpatient")
	public ResponseEntity<Patients> createPatients(@RequestBody Patients p)
	{
		Patients createPatients=pservice.createPatients(p);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(createPatients);
	}
	

	
	
	
	
	
	
	
	

}
