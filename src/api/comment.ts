import { airBnbService } from './services/index';
const pathname = '/binh-luan';

export const commentApi = {
  findByRoomID: async (id: string) => {
    let url = `${pathname}/lay-binh-luan-theo-phong/${id}`;

    try {
      const response = await airBnbService.get(url);

      return response;
    } catch (error) {
      throw error;
    }
  },
  uploadCommentByRoomId: async (data: CommentType) => {
    let url = pathname;

    try {
      const response = await airBnbService.post(url, data);

      return response;
    } catch (error) {
      throw error;
    }
  },
};

export interface CommentType {
  id?: string;
  maPhong: string;
  maNguoiBinhLuan: string;
  ngayBinhLuan: string;
  noiDung: string;
  saoBinhLuan?: number;
}
