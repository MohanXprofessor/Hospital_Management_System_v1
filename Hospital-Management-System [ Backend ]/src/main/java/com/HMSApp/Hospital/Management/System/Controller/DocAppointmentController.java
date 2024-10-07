package com.HMSApp.Hospital.Management.System.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HMSApp.Hospital.Management.System.Services.DocAppointmentService;
import com.HMSApp.Hospital.Management.System.doctloginEntity.Appointment;
import com.HMSApp.Hospital.Management.System.doctloginEntity.Medicine;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/hospital/api")
public class DocAppointmentController {
	
	@Autowired
	private DocAppointmentService aocservice;
	
	
	@PostMapping("/takeappointment")
	public ResponseEntity<Appointment> createAppointment(@RequestBody Appointment appointment)
	{
		Appointment createAppointment=aocservice.createAppointment(appointment);
		return ResponseEntity.status(HttpStatus.CREATED).body(createAppointment);
	}
	
	@GetMapping("/getallappointment")
	public List<Appointment> getAllMedicine()
	{
		List<Appointment> allappointment=aocservice.getAllAppointment();
		
		return allappointment;
	}

}
