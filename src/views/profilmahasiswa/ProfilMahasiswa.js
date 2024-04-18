import React, { useState } from "react";
import {
  CForm,
  CFormInput,
  CCol,
  CFormSelect,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CAvatar,
} from "@coreui/react";

import fotoProfil from "src/assets/images/avatars/sjw.jpeg";

const Pendaftaran = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "15px",
        }}
      >
        <CAvatar src={fotoProfil} style={{ width: "200px", height: "200px" }} />
        <CButton color="link">Ubah Foto</CButton>
      </div>

      <CCard>
        <CCardHeader as="h5">Profil Mahasiswa</CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CCol md={6}>
              <CFormInput
                type="namaMhs"
                id="inputNamaMhs"
                label="Nama Mahasiswa"
              />
            </CCol>
            <CCol md={3}>
              <CFormInput
                type="nim"
                id="inputNim"
                label="Nomor Induk Mahasiswa"
              />
            </CCol>
            <CCol md={3}>
              <CFormSelect id="inputAngkatan" label="Angkatan">
                <option>Pilih...</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
              </CFormSelect>
            </CCol>
            <CCol md={4}>
              <CFormSelect id="inputJk" label="Jenis Kelamin">
                <option>Pilih...</option>
                <option>Laki-laki</option>
                <option>Perempuan</option>
              </CFormSelect>
            </CCol>
            <CCol md={2}>
              <CFormInput
                type="tanggallahir"
                id="inputTanggalLahir"
                label="Tanggal Lahir"
                placeholder="MM/DD/YY"
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="email"
                id="inputEmail"
                label="Email Mahasiswa"
              />
            </CCol>
            <CCol md={3}>
              <CFormSelect id="inputAgama" label="Agama">
                <option>Pilih...</option>
                <option>...</option>
              </CFormSelect>
            </CCol>
            <CCol md={6}>
              <CFormInput type="alamat" id="inputAlamat" label="Alamat" />
            </CCol>
            <CCol md={3}>
              <CFormInput type="noHp" id="inputNoHp" label="Nomor Handphone" />
            </CCol>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton color="primary">Simpan</CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Pendaftaran;
