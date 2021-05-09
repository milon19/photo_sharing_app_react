import React, { useRef } from "react";
import Dropzone from "react-dropzone";
import { useForm } from "react-hook-form";

import * as S from "./styles";
import { BACKEND_URL } from "../../settings/config";

function AlbumForm(props) {
  const { onSubmit, handleFileChange } = props;
  const { handleSubmit, register } = useForm();

  const albumCoverPreview = useRef();

  const onDropProfile = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        albumCoverPreview.current.src = reader.result;
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
            <h1>Create an Album</h1>
          </S.FormHeader>
          <S.FormContainer>
            <S.FormGroupInline>
              <S.InputGroupComplete>
                <label htmlFor="title-input">Title*</label>
                <input
                  type="text"
                  name="title"
                  id="name-input"
                  defaultValue={props?.name}
                  {...register("title", { required: true })}
                />
              </S.InputGroupComplete>
            </S.FormGroupInline>
            <S.InputGroupComplete>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="is_private"
                  {...register("is_private")}
                />
                <label class="form-check-label" for="is_private">
                  Private
                </label>
              </div>
            </S.InputGroupComplete>
            <S.FormGroupInline>
              <S.DropzoneContainer>
                <label htmlFor="">Album Cover*</label>
                <Dropzone
                  accept="image/*"
                  multiple={false}
                  onDrop={onDropProfile}
                >
                  {({ getRootProps, getInputProps }) => (
                    <S.DropzoneArea {...getRootProps()}>
                      <input {...getInputProps()} name="cover" />
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
                  ref={albumCoverPreview}
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
              <button type="submit">Create</button>
            </S.ButtonContainer>
          </S.FormContainer>
        </S.FormElement>
      </S.FormComplete>
    </div>
  );
}

export default AlbumForm;
