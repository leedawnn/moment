import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import { guestFileStore } from '../../stores/guestStore';
import { ROUTES_PATH } from '../../constants/routes';

const GuestFileUpload = () => {
  const navigate = useNavigate();
  const setGuestFileList = useSetAtom(guestFileStore);

  const handleUploadImageFiles = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = evt.target;

    if (files && files?.length > 5) {
      alert('최대 5개의 이미지만 업로드 할 수 있습니다. 다시 한 번 확인해주세요. ');
    }

    if (files) {
      setGuestFileList(files);
      navigate(ROUTES_PATH.guestEdit);
    }
  };

  return (
    <FileUploadWrapper>
      <UploadText> 지금 소중한 이 순간을 공유해주세요. </UploadText>
      <FileInputLabel htmlFor="guestFiles"> 추억 쌓아주러 가기</FileInputLabel>
      <FileInput type="file" accept="image/*" id="guestFiles" multiple onChange={handleUploadImageFiles} />
    </FileUploadWrapper>
  );
};

export default GuestFileUpload;

const FileUploadWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  position: absolute;
  left: 0;
  bottom: 20px;
`;

const UploadText = styled.span`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
`;

const FileInputLabel = styled.label`
  all: unset;

  width: calc(100% - 48px);
  height: 50px;

  background-color: ${({ theme }) => theme.colors.point};
  color: ${({ theme }) => theme.colors.white};

  text-align: center;
  line-height: 50px;

  border-radius: 5px;

  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;
