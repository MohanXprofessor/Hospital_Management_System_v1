package com.HMSApp.Hospital.Management.System.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.HMSApp.Hospital.Management.System.doctloginEntity.Medicine;

public interface DocMedicineRepo extends JpaRepository<Medicine, Long> {

}
