import { Redirect } from 'umi'

export default (props: any) => {
  // 权限控制
  const permissions = [10000000, 10000001, 10000002, 10000010, 10000011, 10000012]
  const hasAuthority = permissions.includes(props.route.meta.code);
  if (hasAuthority) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/404" />;
  }
}