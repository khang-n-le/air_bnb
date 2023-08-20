import React from 'react';
import {
  CommentContent,
  CommentContentWrapper,
  CommentDate,
  CommentUserAvatar,
  CommentUsername,
  CommentUserWrapper,
  CommentWrapper,
  CreateCommentWrapper,
  SubmitButton,
  SubmitCommentWrapper,
  TotalComment,
  TotalContent,
} from './styled';
import { findCommentByRoomId } from 'slice';
import { useAppDispatch } from 'app/hooks';
import { Row, Col, Input, Button } from 'antd';
import defaultImage from 'public/defaultImage.jpg';
import { ConvertDateToVNDate } from 'utils';

const Comment = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    const getCommentById = async () => {
      try {
        const result = await dispatch(findCommentByRoomId(id)).unwrap();
        setData((result as any).content);
      } catch (e) {
        // console.log(e);
      }
    };

    if (id) {
      getCommentById();
    }
  }, [id]);

  return (
    <CommentWrapper>
      <TotalComment>{data?.length} đánh giá</TotalComment>
      <TotalContent>
        đánh giá Xếp hạng trung bình sẽ được hiển thị sau khi có 3 đánh giá
      </TotalContent>

      <Row gutter={[45, 45]}>
        {data?.map((item, index) => {
          return (
            <Col span={12} key={item.id} style={{ paddingRight: '94px' }}>
              <CommentUserWrapper>
                <CommentUserAvatar
                  src={
                    item.avatar || `${window.location.origin}/defaultImage.jpg`
                  }
                ></CommentUserAvatar>
                <CommentContentWrapper>
                  <CommentUsername>{item.tenNguoiBinhLuan}</CommentUsername>
                  <CommentDate>
                    {ConvertDateToVNDate(item.ngayBinhLuan)}
                  </CommentDate>
                </CommentContentWrapper>
              </CommentUserWrapper>
              <CommentContent>{item.noiDung}</CommentContent>
            </Col>
          );
        })}
      </Row>
      <CreateCommentWrapper>
        <CommentUserAvatar
          src={`${window.location.origin}/defaultImage.jpg`}
        ></CommentUserAvatar>
        <SubmitCommentWrapper>
          <Input.TextArea
            placeholder="Autosize height with minimum and maximum number of lines"
            autoSize={{ minRows: 4, maxRows: 6 }}
          />
          <SubmitButton>Thêm bình luận</SubmitButton>
        </SubmitCommentWrapper>
      </CreateCommentWrapper>
    </CommentWrapper>
  );
};

export default Comment;
