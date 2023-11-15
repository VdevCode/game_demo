import Button from '@shared/components/Button';
import configs from '@configs/index';
import { useState } from 'react';

function CheckPass({ setDownload }: { setDownload: any }) {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const hanldeDownload = () => {
    if (value === 'gamefpoly2713') {
      const targetPageURL = configs.api.download;
      window.open(targetPageURL, '_blank');
    } else {
      setError(true);
    }
  };
  return (
    <div className="flex-1 flex flex-col gap-2 px-10">
      <p className="text-sm">
        Lưu ý: Nhập chính xác mã bảo vệ để tải xuống file dữ liệu
      </p>
      <p>Nhập mã: </p>
      <input
        type="text"
        className="border t px-2 h-10 bg-[#FDC21C] text-white"
        placeholder="Nhập mã bảo vệ"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p className="text-red-400 h-5">{error && 'Sai mã bảo vệ'}</p>
      <div className="flex items-center justify-between">
        <Button onClick={() => setDownload(false)}>Trở lại</Button>
        <Button onClick={hanldeDownload}>Xác nhận</Button>
      </div>
    </div>
  );
}

export default CheckPass;
