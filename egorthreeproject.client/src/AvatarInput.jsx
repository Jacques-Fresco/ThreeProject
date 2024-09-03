import React, { useEffect, useRef, useState } from 'react';
import './AvatarInput.css'; // Импортируйте свой CSS файл

const AvatarInput = () => {
  const [percentage, setPercentage] = useState(0);
  const [imageSrc, setImageSrc] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputRef = useRef(null);
  const rootRef = useRef(null);
  const reader = useRef(new FileReader());

  useEffect(() => {
    const handleFileRead = () => {
      const image = reader.current.result;
      setImageSrc(image);
      startUploading();
    };

    reader.current.addEventListener('load', handleFileRead);

    return () => {
      reader.current.removeEventListener('load', handleFileRead);
    };
  }, []);

  const startUploading = () => {
    setTimeout(() => {
      uploadTick();
    }, 600);
  };

  const uploadTick = () => {
    if (percentage === 100) {
      setTimeout(() => {
        onDone();
      }, 400);
      return;
    }
    setPercentage((prev) => prev + 1);
    requestAnimationFrame(uploadTick);
  };

  const onDone = () => {
    setUploading(false);
    setSuccess(true);
    setTimeout(() => {
      setPercentage(0);
    }, 200);
    setTimeout(() => {
      setSuccess(false);
    }, 1200);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    rootRef.current.classList.add('avatar-input--dragover');
  };

  const handleDragLeave = () => {
    rootRef.current.classList.remove('avatar-input--dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const items = [...e.dataTransfer.items];
    if (!items || items[0].kind !== 'file') return;
    const file = items[0].getAsFile();
    reader.current.readAsDataURL(file);
    setUploading(true);
  };

  const handleFileSelect = () => {
    const file = inputRef.current.files[0];
    if (file) {
      setUploading(true);
      reader.current.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`avatar-input ${uploading ? 'avatar-input--uploading' : ''} ${success ? 'avatar-input--success' : ''}`}
      style={{ margin: 'auto' }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      ref={rootRef}
    >
      <label className="avatar-input__label" htmlFor="file-input">
        <input
          type="file"
          id="file-input"
          className="avatar-input__input"
          ref={inputRef}
          onChange={handleFileSelect}
        />
        <div className="avatar-input__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.8 460.8" fill="currentColor">
            <path
              d="M230.432,239.282c65.829,0,119.641-53.812,119.641-119.641C350.073,53.812,296.261,0,230.432,0 S110.792,53.812,110.792,119.641S164.604,239.282,230.432,239.282z"
            />
            <path
              d="M435.755,334.89c-3.135-7.837-7.314-15.151-12.016-21.943c-24.033-35.527-61.126-59.037-102.922-64.784 c-5.224-0.522-10.971,0.522-15.151,3.657c-21.943,16.196-48.065,24.555-75.233,24.555s-53.29-8.359-75.233-24.555 c-4.18-3.135-9.927-4.702-15.151-3.657c-41.796,5.747-79.412,29.257-102.922,64.784c-4.702,6.792-8.882,14.629-12.016,21.943 c-1.567,3.135-1.045,6.792,0.522,9.927c4.18,7.314,9.404,14.629,14.106,20.898c7.314,9.927,15.151,18.808,24.033,27.167 c7.314,7.314,15.673,14.106,24.033,20.898c41.273,30.825,90.906,47.02,142.106,47.02s100.833-16.196,142.106-47.02 c8.359-6.269,16.718-13.584,24.033-20.898c8.359-8.359,16.718-17.241,24.033-27.167c5.224-6.792,9.927-13.584,14.106-20.898 C436.8,341.682,437.322,338.024,435.755,334.89z"
            />
          </svg>
        </div>
      </label>
      {uploading && <div className="avatar-input__percentage">{percentage}%</div>}
      {imageSrc && <img src={imageSrc} alt="Preview" className="avatar-input__preview" />}
      {success && <div className="avatar-input__success">Upload successful!</div>}
    </div>
  );
};

export default AvatarInput;
