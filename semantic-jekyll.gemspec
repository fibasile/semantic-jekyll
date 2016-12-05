# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "semantic-jekyll"
  spec.version       = "0.1.0"
  spec.authors       = ["Fiore Basile"]
  spec.email         = ["fiore.basile@gmail.com"]

  spec.summary       = %q{Corporate Theme using Semantic-UI}
  spec.homepage      = "http://github.com/fibasile/semantic-jekyll"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_development_dependency "jekyll", "~> 3.3"
  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 0.12"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.8"
  spec.add_runtime_dependency "jemoji", "~> 0.7"
end
