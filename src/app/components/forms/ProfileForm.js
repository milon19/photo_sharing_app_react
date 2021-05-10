import React, { useRef } from "react";
import Dropzone from "react-dropzone";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import * as S from "./styles";
import { BACKEND_URL } from "../../settings/config";

function ProfileForm(props) {
  const { onSubmit, handleFileChange } = props;
  const { handleSubmit, register } = useForm();
  const history = useHistory();

  const profilePicturePreview = useRef();

  const onDropProfile = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        profilePicturePreview.current.src = reader.result;
        handleFileChange(file);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <S.FormComplete>
        <S.FormElement onSubmit={handleSubmit(onSubmit)}>
          <S.FormHeader>
            <h1>Complete Profile</h1>
          </S.FormHeader>
          <S.FormContainer>
            <S.FormGroupInline>
              <S.InputGroupComplete>
                <label htmlFor="name-input">Full Name*</label>
                <input
                  type="text"
                  name="name"
                  id="name-input"
                  defaultValue={props?.name}
                  {...register("name", { required: false })}
                />
              </S.InputGroupComplete>
            </S.FormGroupInline>
            <S.InputGroupComplete>
              <label htmlFor="phone-input">Phone*</label>
              <textarea
                type="text"
                name="phone"
                id="phone-input"
                defaultValue={props.phone}
                {...register("phone", { required: false })}
              />
            </S.InputGroupComplete>
            <S.FormGroupInline>
              <S.DropzoneContainer>
                <label htmlFor="">Profile Picture*</label>
                <Dropzone
                  accept="image/*"
                  multiple={false}
                  onDrop={onDropProfile}
                >
                  {({ getRootProps, getInputProps }) => (
                    <S.DropzoneArea {...getRootProps()}>
                      <input {...getInputProps()} name="profile_picture" />
                      <S.DropIcon />
                      <p>Drop or Select a file.</p>
                    </S.DropzoneArea>
                  )}
                </Dropzone>
                <span>Supported Format: images</span>
              </S.DropzoneContainer>
              <S.ImagePreviewContainer>
                <img
                  src={`${BACKEND_URL}${props.profile_pic}`}
                  alt=""
                  ref={profilePicturePreview}
                />
              </S.ImagePreviewContainer>
            </S.FormGroupInline>

            <S.ErrorContainer
              style={{
                display: props?.errors?.length > 0 ? "block" : "none",
              }}
            >
              {props?.errors?.map((err) => (
                <li>{err.message}</li>
              ))}
            </S.ErrorContainer>
            <S.ButtonContainer>
              <button type="submit">Update</button>
              <button onClick={() => history.push("/profile/")}>Cancel</button>
            </S.ButtonContainer>
          </S.FormContainer>
        </S.FormElement>
      </S.FormComplete>
    </div>
  );
}

export default ProfileForm;
