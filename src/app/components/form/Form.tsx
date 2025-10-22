"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from '@/app/components/form/Form.module.css';

    interface FormData {
        name: string;
        email: string;
        phone: string;
        dateOfBirth: string;
    }
  
  interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    dateOfBirth?: string;
  }

  export default function Form() {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        dateOfBirth: "",
      });

      const [errors, setErrors] = useState<FormErrors>({});

      const validate = (name: string, value: string) => {
        let error = "";

        if (!value.trim()) {
            error = "This field is required";
          } else {
        switch(name){
            case "name"://if thre is error with the name
                const words = value.trim().split(" ");
                if(words.length < 2){
                    error = "pleas enter full name (at least 2 words)";
                }else if(/\b\d/.test(value)){
                    error = "name cannot start with number";
                }
                break;

            case "email"://if thre is error with the mail
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = "mail not valid";
                }
                break;
            
            case "phone"://if thre is error with the phone
                if (!/^\d+$/.test(value)) {
                    error = "phone number can contain only numbers";
                }
                break;
            
                case "dateOfBirth":
                    const birthDate = new Date(value);
                    const age = new Date().getFullYear() - birthDate.getFullYear();
                    if (isNaN(birthDate.getTime())) {
                      error = "enter valid date";
                    } else if (age < 18) {
                      error = "you need to be over 18";
                    }
                    break
        }
    }
        setErrors((prev) => ({...prev, [name]:error }));
    }

      const changes = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev, [name]: value }));
        validate(name, value);
      };

      const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const fields = Object.keys(formData) as (keyof FormData)[];
        fields.forEach((fields) => validate(fields, formData[fields]));
        if (
            Object.values(errors).some((err) => err) ||
            Object.values(formData).some((val) => !val.trim())
          ) {
            alert("Fix all mistakes and fill all fields before submitting");
            return;
          }
          alert("sucsses ✅");
          router.back();
      }
      return (
        <div className={styles.container}>
          <form onSubmit={submit} className={styles.form}>
            <h2 className={styles.title}>form</h2>
    
            <label className={styles.label}>full name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={changes}
              className={styles.input}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
    
            <label className={styles.label}>email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={changes}
              className={styles.input}
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
    
            <label className={styles.label}>phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={changes}
              className={styles.input}
            />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
    
            <label className={styles.label}>birthDate</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={changes}
              className={styles.input}
            />
            {errors.dateOfBirth && <span className={styles.error}>{errors.dateOfBirth}</span>}
    
            <button type="submit" className={styles.button}>
              send
            </button>
          </form>
        </div>
      );
    
}