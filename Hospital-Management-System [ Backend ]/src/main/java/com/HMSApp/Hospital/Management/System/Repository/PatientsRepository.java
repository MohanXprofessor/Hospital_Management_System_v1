package com.HMSApp.Hospital.Management.System.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HMSApp.Hospital.Management.System.entity.Patients;

@Repository
public interface PatientsRepository extends JpaRepository<Patients, Long> {

}
