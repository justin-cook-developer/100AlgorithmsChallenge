const determinedomainType = topLevel => {
  switch(topLevel) {
    case 'org':
      return 'organization';
    case 'com':
      return 'commercial';
    case 'net':
      return 'network';
    case 'info':
      return 'information';
  }
}

function domainType(domains) {
  return domains.map(url => {
    const split = url.split('.');
    const domain = split[split.length - 1]
    return determinedomainType(domain);
  });
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));
