import { Router, Request, Response } from 'express';
import Bookmark from '../../models/Bookmark.js';

const route = Router();

export default (app: Router) => {
    app.use('/bookmark', route);

    route.get('/:userId', async (req: Request, res: Response) => {
        try {
            const bookmark = await Bookmark.findOne({ userId: req.params.userId });

            if (!bookmark) res.json({ success: false, message: '사용자 정보가 없습니다.' });
            else res.json({ success: true, groupList: bookmark?.groupList });
        } catch (err) {
            if (err instanceof Error) {
                res.json({ success: false, errorMessage: err.message });
            }
        }
    });

    route.post('/create', async (req: Request, res: Response) => {
        try {
            const userId = req.body.userId;
            const name = req.body.name;
            const groupIcon = req.body.groupIcon;

            const bookmark = await Bookmark.findOneAndUpdate(
                {
                    userId: userId,
                },
                {
                    $push: {
                        groupList: {
                            name: name,
                            groupIcon: groupIcon,
                        },
                    },
                }
            ).exec();

            if (!bookmark) res.json({ success: false, message: '사용자가 존재하지 않습니다.' });
            else res.status(200).json({ success: true, bookmarkGroup: bookmark });
        } catch (err) {
            if (err instanceof Error) {
                res.json({ success: false, errorMessage: err.message });
            }
        }
    });

    route.patch('/update', async (req: Request, res: Response) => {
        try {
            const { userId, groupId, name, groupIcon } = req.body;
            const updatedAt = new Intl.DateTimeFormat('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            }).format(new Date());

            const updatedBookmark = await Bookmark.findOneAndUpdate(
                {
                    userId: userId,
                    'groupList._id': groupId,
                },
                {
                    // $는 groupList 배열에서 위 조건에 일치하는 인덱스를 의미
                    $set: {
                        'groupList.$.name': name,
                        'groupList.$.groupIcon': groupIcon,
                        'groupList.$.updatedAt': updatedAt,
                    },
                },
                { new: true }
            );

            if (!updatedBookmark) {
                return res.json({ success: false, errorMessage: '해당 그룹을 찾을 수 없습니다.' });
            } else {
                res.json({ success: true, updatedBookmark });
            }
        } catch (err) {
            if (err instanceof Error) {
                res.json({ success: false, errorMessage: err.message });
            }
        }
    });

    route.delete('/:groupId', async (req: Request, res: Response) => {
        try {
            const bookmarkGroup = await Bookmark.findOneAndUpdate(
                { userId: req.body.userId },
                {
                    $pull: {
                        groupList: {
                            _id: req.params.groupId,
                        },
                    },
                }
            );

            if (!bookmarkGroup) {
                res.json({ success: false, message: '해당 그룹이 존재하지 않습니다.' });
            } else {
                res.status(200).json({ success: true, message: '북마크 그룹이 삭제되었습니다.' });
            }
        } catch (err) {
            if (err instanceof Error) {
                res.json({ success: false, errorMessage: err.message });
            }
        }
    });
};
