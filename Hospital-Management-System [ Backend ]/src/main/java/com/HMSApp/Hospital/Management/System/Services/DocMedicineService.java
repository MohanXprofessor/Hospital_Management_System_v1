package com.HMSApp.Hospital.Management.System.Services;

import java.util.List;

import com.HMSApp.Hospital.Management.System.doctloginEntity.Medicine;



public interface DocMedicineService {

	// All Method Come under Interface Service Layer
	// To Save Medicine
    public Medicine createMedicine(Medicine Medicine);
	
    // To Search by Id 
   public  Medicine getMedicineById(Long id);
    
    // Optional: To Update Medicine
    public Medicine updateMedicine(Medicine Medicine);
    
    // Optional: To Delete Medicine
   public  void deleteMedicine(Long id);
    
    // Optional: To Get All Medicine
    public List<Medicine> getAllMedicine();
}
