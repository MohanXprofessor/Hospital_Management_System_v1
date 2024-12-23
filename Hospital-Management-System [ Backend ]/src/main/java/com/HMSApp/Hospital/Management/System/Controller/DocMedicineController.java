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

import com.HMSApp.Hospital.Management.System.Services.DocMedicineService;
import com.HMSApp.Hospital.Management.System.doctloginEntity.Medicine;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/hospital/api")
public class DocMedicineController {

	@Autowired
	private DocMedicineService docrepo;
	
	@PostMapping("/medicine")
	public ResponseEntity<Medicine> createMedicine(@RequestBody Medicine medicine)
	{
		Medicine createMedicine=docrepo.createMedicine(medicine);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(createMedicine);
	}
	
	@GetMapping("/getallmedicine")
	public List<Medicine> getAllMedicine()
	{
		List<Medicine> allMedicines=docrepo.getAllMedicine();
		
		return allMedicines;
	}
	
	
}
