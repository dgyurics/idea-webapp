import React from 'react'
import styles from './Header.css'
import { Icon } from 'react-icons-kit'
import { messageCircle } from 'react-icons-kit/feather/messageCircle'
import { github } from 'react-icons-kit/feather/github'
import { layers } from 'react-icons-kit/feather/layers'
import { user } from 'react-icons-kit/feather/user'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <div className={styles.header}>
      <ol>
        <li>
          <a href="https://github.com/dgyurics">
            <Icon icon={github}/>
          </a>
        </li>
        <li>
          <Link to={'/idea'}>
            <Icon icon={layers}/>
          </Link></li>
      </ol>
    </div>
  )
};

export default Header;
