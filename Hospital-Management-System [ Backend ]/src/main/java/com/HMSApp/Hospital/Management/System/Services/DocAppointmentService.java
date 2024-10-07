package com.HMSApp.Hospital.Management.System.Services;

import java.util.List;

import com.HMSApp.Hospital.Management.System.doctloginEntity.Appointment;



public interface DocAppointmentService {

	
	// All Method Come under Interface Service Layer
	// To Save Appointment
    public Appointment createAppointment(Appointment Appointment);
	
    // To Search by Id 
   public  Appointment getAppointmentById(Long id);
    
    // Optional: To Update Appointment
    public Appointment updateAppointment(Appointment Appointment);
    
    // Optional: To Delete Appointment
   public  void deleteAppointment(Long id);
    
    // Optional: To Get All Appointment
    public List<Appointment> getAllAppointment();
}
