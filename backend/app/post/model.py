from datetime import datetime

from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text

from database import UUID, Base, uuid4


class Post(Base):
    __tablename__ = "posts"

    id = Column(UUID, primary_key=True, default=uuid4)
    author_id = Column(UUID, ForeignKey("users.id"))
    subject = Column(String(50), nullable=False)
    content = Column(Text(), nullable=False)
    viewed = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.now)
    updated_at = Column(DateTime, default=datetime.now, onupdate=datetime.now)
