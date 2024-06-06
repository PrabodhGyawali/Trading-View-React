from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy import Integer, String, VARCHAR
from datetime import datetime

# Cool new things on Python
    # Dunders: special methods that are surrounded by double underscores
    # Database class methods
    # Alembic for DB migrations


class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)

class User(db.Model):
    __tablename__ = "user_table"
    id: Mapped[Integer] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(unique=True, nullable=False)
    password: Mapped[Integer] = mapped_column(nullable=False)
    created_at: Mapped[datetime] = mapped_column(nullable=False, default=datetime.datetime.now)
    updated_at: Mapped[datetime] = mapped_column(onupdate=datetime.datetime.now)
    children: Mapped["Symbols"] = relationship("Symbols", back_populates="user")
    
    def __repr__(self):
        return f'<User id={self.id} email={self.email}>'
    
    # You can generate class methods as User is a class

class Symbols(db.Model):
    __tablename__ = "symbols_table"
    id: Mapped[Integer] = mapped_column(primary_key=True)
    symbol: Mapped[str] = mapped_column(unique=True, nullable=False)
    user_id: Mapped[Integer] = mapped_column(db.ForeignKey("user.id"), nullable=False)
    user: Mapped["User"] = relationship(back_populates="symbols")
    
    def __repr__(self):
        return f'<User id={self.user_id} symbol={self.symbol}>'
    
