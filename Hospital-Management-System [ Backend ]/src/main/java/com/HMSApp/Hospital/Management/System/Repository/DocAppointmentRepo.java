package com.HMSApp.Hospital.Management.System.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.HMSApp.Hospital.Management.System.doctloginEntity.Appointment;

public interface DocAppointmentRepo extends JpaRepository<Appointment, Long> {

}
