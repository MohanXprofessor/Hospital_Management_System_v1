package com.HMSApp.Hospital.Management.System.Services;

import java.util.List;

import com.HMSApp.Hospital.Management.System.entity.Patients;

public interface PatientsService {
	
	// All Method Come under Interface Service Layer
	
	// To Save Patients
    public Patients createPatients(Patients patients);
	
    // To Search by Id 
   public  Patients getPatientsById(Long id);
    
    // Optional: To Update Patients
    public Patients updatePatients(Patients patients);
    
    // Optional: To Delete Patients
   public  void deletePatients(Long id);
    
    // Optional: To Get All Patients
    public List<Patients> getAllPatients();
	

}
