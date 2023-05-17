import React from 'react';
import { Break } from '../../../Break';
import { EColor, Text } from '../../../Text';
import { EIcon, Icon } from '../../../Icon';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
  loading?: boolean
}

export function UserBlock({ avatarSrc, username, loading}: IUserBlockProps) {

  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=${process.env.URI}&duration=permanent&scope=read submit identity`}

      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt='user avatar' className={styles.avatarImage} />
          : <Icon name={EIcon.anon} size={50} />
        }
      </div>

      <div className={styles.username}>
        <Break size={12} />
        {loading ? (
          <Text size={20} color={EColor.grey99} > Загрузка... </Text>
        ) : (   
          <Text size={20} color={username ? EColor.black : EColor.grey99} > {username || 'Аноним'} </Text>
          ) }
      </div>
    </a>
  )
}
