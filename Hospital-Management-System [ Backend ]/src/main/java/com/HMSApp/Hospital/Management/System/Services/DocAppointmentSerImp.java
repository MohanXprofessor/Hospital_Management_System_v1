package com.HMSApp.Hospital.Management.System.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HMSApp.Hospital.Management.System.Repository.DocAppointmentRepo;
import com.HMSApp.Hospital.Management.System.doctloginEntity.Appointment;

@Service
public class DocAppointmentSerImp implements DocAppointmentService {
	
	@Autowired
	private DocAppointmentRepo docappointmentrepo;

	@Override
	public Appointment createAppointment(Appointment Appointment) {
		
		return docappointmentrepo.save(Appointment);
	}

	@Override
	public Appointment getAppointmentById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Appointment updateAppointment(Appointment Appointment) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteAppointment(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Appointment> getAllAppointment() {
		List<Appointment> getAllAppointment=docappointmentrepo.findAll();
		return getAllAppointment;
	}

}
