import classnames from 'classnames';
import styles from './index.less';

export default function EmptyPage() {
  return (
    <div className={classnames(styles.empty, 'flex jc-center ai-center')}>
      <img src={require('@/assets/404.png')} />
    </div>
  );
}
