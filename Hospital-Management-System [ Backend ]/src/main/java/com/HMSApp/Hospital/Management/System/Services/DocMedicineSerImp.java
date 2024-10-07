package com.HMSApp.Hospital.Management.System.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HMSApp.Hospital.Management.System.Repository.DocMedicineRepo;
import com.HMSApp.Hospital.Management.System.doctloginEntity.Medicine;



@Service
public class DocMedicineSerImp implements DocMedicineService {

	@Autowired
	private DocMedicineRepo docmedicinerepo;
	
	@Override
	public Medicine createMedicine(Medicine Medicine) {
		
		return docmedicinerepo.save(Medicine);
	}

	
	@Override
	public Medicine getMedicineById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Medicine updateMedicine(Medicine Medicine) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteMedicine(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Medicine> getAllMedicine() {
		
		List<Medicine> listofMedicine=docmedicinerepo.findAll();
		return listofMedicine;
	}

	

}